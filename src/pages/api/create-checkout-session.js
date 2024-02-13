const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { items, email } = req.body

    // convert items into stripe standard products array

    const transformedItems = items.map(item => ({
        quantity: item.qty,
        price_data: {
            currency: 'usd',
            unit_amount: item.product.price * 100,
            product_data: {
                name: item.product.title,
                images: [item.product.images[0]],
            },
        }
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/cart`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.product.images))
        }
    })

    res.status(200).json({ id: session.id })

}
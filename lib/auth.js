// will authenication related utility methods

import {hash} from 'bcryptjs';

import React from 'react'

async function hashPassword(password) {
   const hashedassword = await hash(password, 12);
   return hashPassword
}

export default hashPassword
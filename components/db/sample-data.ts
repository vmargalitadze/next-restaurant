import {hashSync} from 'bcrypt-ts-edge'
const sampleData = {
  users: [
    {
      name: 'Vako',
      email: 'vaqsii23@gmail.com',
      password: hashSync('12345678', 10),
      role: 'admin',
    },
 
  ],

};

export default sampleData;

// generate-hash.js
const bcrypt = require("bcryptjs");

const plaintextPassword1 = "password123"; // Your desired password for jobseeker1
const plaintextPassword2 = "password456"; // Your desired password for jobseeker2
const plaintextPassword3 = "companypass1"; // Your desired password for employer1
const plaintextPassword4 = "companypass2"; // Your desired password for employer2

const saltRounds = 10; // Use the same salt rounds as in createUser

async function generateHashes() {
  console.log(`Hashing "${plaintextPassword1}"...`);
  const hash1 = await bcrypt.hash(plaintextPassword1, saltRounds);
  console.log(`Hash for "${plaintextPassword1}": ${hash1}`);

  console.log(`\nHashing "${plaintextPassword2}"...`);
  const hash2 = await bcrypt.hash(plaintextPassword2, saltRounds);
  console.log(`Hash for "${plaintextPassword2}": ${hash2}`);

  console.log(`\nHashing "${plaintextPassword3}"...`);
  const hash3 = await bcrypt.hash(plaintextPassword3, saltRounds);
  console.log(`Hash for "${plaintextPassword3}": ${hash3}`);

  console.log(`\nHashing "${plaintextPassword4}"...`);
  const hash4 = await bcrypt.hash(plaintextPassword4, saltRounds);
  console.log(`Hash for "${plaintextPassword4}": ${hash4}`);
}

generateHashes();

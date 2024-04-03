import fs from "fs/promises";
// read data in a file
export async function getCustomers() {
    const rawFileContent = await fs.readFile('customers.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    const storedNotes = data.customers ?? [];
    return storedNotes;
}
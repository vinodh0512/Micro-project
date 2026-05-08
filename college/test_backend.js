import axios from 'axios';

const API_URL = 'https://vinodh0512-e-learning.hf.space';

async function testBackend() {
    console.log(`Testing Backend at: ${API_URL}`);
    
    try {
        console.log('\n--- 1. Testing Root ---');
        const rootRes = await axios.get(API_URL);
        console.log('Status:', rootRes.status);
        console.log('Response:', rootRes.data);

        console.log('\n--- 2. Testing Stats ---');
        const statsRes = await axios.get(`${API_URL}/admin/stats`);
        console.log('Status:', statsRes.status);
        console.log('Data:', JSON.stringify(statsRes.data, null, 2));

        console.log('\n--- 3. Testing Courses ---');
        const coursesRes = await axios.get(`${API_URL}/courses`);
        console.log('Status:', coursesRes.status);
        console.log('Count:', Array.isArray(coursesRes.data) ? coursesRes.data.length : 'Not an array');

        console.log('\n--- 4. Testing Instructors ---');
        const instRes = await axios.get(`${API_URL}/instructor`);
        console.log('Status:', instRes.status);
        console.log('Count:', Array.isArray(instRes.data) ? instRes.data.length : 'Not an array');

    } catch (error) {
        console.error('Test Failed!');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Error:', error.message);
        }
    }
}

testBackend();

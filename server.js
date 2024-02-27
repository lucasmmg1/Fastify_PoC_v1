// Imports
import Fastify from 'fastify'
import FastifyStatic from '@fastify/static';
import FastifyFormBody from '@fastify/formbody'
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

// Variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fastify = Fastify
({
  logger: true
})

// Register static assets
fastify.register(FastifyStatic,
{
    root: path.join(__dirname, 'Assets'),
    prefix: '/Assets/',
});
fastify.register(FastifyFormBody);

// Declare a route
fastify.get('/', async function handler (request, reply)
{
    const htmlContent = fs.readFileSync(path.join(__dirname, 'index.php'), 'utf8');
    reply.type('text/html').send(htmlContent);
})
fastify.get('/api/products', async (request, reply) =>
{
  const htmlContent = fs.readFileSync(path.join(__dirname, '/Assets/Application_Main/features/products/scripts/php/products.php'), 'utf8');
  reply.type('text/html').send(htmlContent);
});
fastify.post('/api/products', async (request, reply) =>
{
    const products = request.body;
    fs.writeFile(path.join(__dirname, '/Assets/Application_Main/features/products/scripts/json/products.json'), JSON.stringify(products), (err) =>
    {
        if (err)
        {
            reply.status(500).send('An error occurred while updating the products: ' + err);
            return;
        }
        reply.send('Products updated successfully.');
    });
});
fastify.get('/api/products/:id', async (request, reply) =>
{
    const id = request.params.id;

    // Load the products data
    const productsData = fs.readFileSync(path.join(__dirname, '/Assets/Application_Main/features/products/scripts/json/products.json'), 'utf8');
    const products = JSON.parse(productsData);

    // Find the product with the matching ID
    const product = products.find(product => product.id === id);

    if (product)
    {
        // If the product was found, send it in the response
        reply.send(product);
    }
    else
    {
        // If no product was found with the given ID, send a 404 error
        reply.code(404).send({ error: 'Product not found' });
    }
});
fastify.get('/api/authentication', async (request, reply) =>
{
    const htmlContent = fs.readFileSync(path.join(__dirname, '/Assets/Application_Main/features/authentication/scripts/php/authentication.php'), 'utf8');
    reply.type('text/html').send(htmlContent);
});
fastify.post('/api/login', async (request, reply) =>
{
    let CheckCredentials = (username, password) =>
    {
        return username === 'admin' && password === 'admin';
    }

    const {username, password} = request.body;
    if (username && password && CheckCredentials(username, password))
    {
        console.log('Authenticated')
        reply.send({status: 200});
    }
    else
    {
        console.log('Not Authenticated')
        reply.send({status: 404});
    }
});

// Run the server!
try
{
  await fastify.listen({ port: 3000 })
}
catch (err)
{
  fastify.log.error(err)
  process.exit(1)
}

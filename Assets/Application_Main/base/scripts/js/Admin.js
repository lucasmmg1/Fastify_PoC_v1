class Admin
{
    static Upload(url, params)
    {
        let promise = Promise.resolve();
        promise = promise.then(function()
        {
            return fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {'Content-Type': 'application/json'}
            })
            .then(response =>
            {
                switch (response.ok)
                {
                    case true:
                        return response.json();
                    case false:
                        throw new Error(`Network response was not ok. Status: ${response.status} ${response.statusText}`);
                }
            })
            .then(data =>
            {
                switch (data.status)
                {
                    case 'success':
                        break;
                    case 'error':
                        console.error('Error:', data.message);
                        break;
                }
            })
            .catch(error =>
            {
                console.error('Error:', error);
            });
        });
        return promise;
    }
    static Retrieve(keys, filename, params)
    {
        let promises = [];
        for (let field of Object.keys(keys))
        {
            params['field'] = field;
            let url = new URL(filename, window.location.href);
            url.search = new URLSearchParams(params).toString();

            let promise = fetch(url, {method: 'GET'})
            .then(response =>
            {
                switch (response.ok)
                {
                    case true:
                        return response.json();
                    case false:
                        throw new Error('Network response was not ok.');
                }
            })
            .then(data =>
            {
                switch (data.status)
                {
                    case 'success':
                        keys[field] = data.data;
                        break;
                    case 'error':
                        keys[field] = "";
                        break;
                }
            })
            .catch(error =>
            {
                console.error('Error:', error);
            });
            promises.push(promise);
        }
        return Promise.all(promises);
    }
    static RetrieveField(keys, key, filename, params)
    {
        let promises = [];
        for (let field of Object.keys(keys))
        {
            if (field !== key) continue;

            params['field'] = key;
            let url = new URL(filename, window.location.href);
            url.search = new URLSearchParams(params).toString();

            let promise = fetch(url, {method: 'GET'})
            .then(response =>
            {
                switch (response.ok)
                {
                    case true:
                        return response.json();
                    case false:
                        throw new Error('Network response was not ok.');
                }
            })
            .then(data =>
            {
                switch (data.status)
                {
                    case 'success':
                        return data.data;
                        break;
                    case 'error':
                        break;
                }
                console.log()
            })
            .then(data =>
            {
                if (!data) return;
                console.log(data)
            })
            .catch(error =>
            {
                console.error('Error:', error);
            });
            promises.push(promise);
        }
        return Promise.all(promises);
    }
}
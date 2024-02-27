class Features_Authentication
{
    static Setup()
    {
        let SetupEventListeners = () =>
        {
            let SetupLoginButtonEventListeners = () =>
            {
                const form = document.querySelector('form');
                form.addEventListener('submit', (event) =>
                {
                    event.preventDefault();
                    Features_Authentication.OnLoginButtonPressed();
                });
            }
            SetupLoginButtonEventListeners();

            let SetupLogoutButtonEventListeners = () =>
            {
                const logoutBTN = document.getElementById('LogoutBTN');
                logoutBTN.addEventListener('click', (event) =>
                {
                    let loginPNL = document.getElementById('LoginPNL');
                    let loginSuccessPNL = document.getElementById('LoginSuccessPNL');
                    let username = document.getElementById('username');
                    let password = document.getElementById('password');

                    loginSuccessPNL.classList.remove('d-flex');
                    loginSuccessPNL.classList.add('d-none');
                    username.value = '';
                    password.value = '';
                    loginPNL.classList.remove('d-none');
                    loginPNL.classList.add('d-flex');
                });
            }
            SetupLogoutButtonEventListeners();
        }
        SetupEventListeners();
    }
    static async OnLoginButtonPressed()
    {
        await fetch(`/api/login`,
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:  document.getElementById('username').value, password: document.getElementById('password').value})
        })
        .then(response =>
        {
            return response.json();
        })
        .then(response =>
        {
            let loginPNL = document.getElementById('LoginPNL');
            let loginErrorPNL = document.getElementById('LoginErrorPNL');
            let loginSuccessPNL = document.getElementById('LoginSuccessPNL');

            switch (response.status)
            {
                case 200:
                    loginPNL.classList.remove('d-flex');
                    loginPNL.classList.add('d-none');
                    loginErrorPNL.classList.remove('d-flex');
                    loginErrorPNL.classList.add('d-none');
                    loginSuccessPNL.classList.remove('d-none');
                    loginSuccessPNL.classList.add('d-flex');
                    break;
                case 404:
                    loginErrorPNL.classList.remove('d-none');
                    loginErrorPNL.classList.add('d-flex');
                    break;
            }
        });
    }
}
Features_Authentication.Setup();
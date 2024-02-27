class Features_Products
{
    static products = [];

    static Setup()
    {
        let SetupInterface = () =>
        {
            let SetupAddProductModal = () =>
            {
                new Modal(document.body);
                let modal = document.body.querySelector('.modal');
                modal.id = 'AddProductModal';
                let modalDialog = modal.querySelector('.modal-dialog');
                let modalContent = modalDialog.querySelector('.modal-content');
                let modalHeader = modalContent.querySelector('.modal-header');
                modalHeader.classList.add('d-flex', 'flex-row', 'm-0', 'p-0', 'justify-content-center', 'align-items-center');
                let modalTitleTMP = modalHeader.appendChild(document.createElement('h5'));
                modalTitleTMP.classList.add('modal-title', 'm-0', 'p-0');
                modalTitleTMP.innerHTML = 'Add Product';
                let modalBody = modalContent.querySelector('.modal-body');
                let productNameInput = modalBody.appendChild(document.createElement('input'));
                productNameInput.classList.add('form-control', 'mb-2');
                productNameInput.id = 'ProductNameInput';
                productNameInput.type = 'text';
                productNameInput.placeholder = 'Product Name';
                let productDescriptionInput = modalBody.appendChild(document.createElement('textarea'));
                productDescriptionInput.classList.add('form-control', 'mb-2');
                productDescriptionInput.id = 'ProductDescriptionInput';
                productDescriptionInput.placeholder = 'Product Description';
                let productPriceInput = modalBody.appendChild(document.createElement('input'));
                productPriceInput.classList.add('form-control', 'mb-2');
                productPriceInput.id = 'ProductPriceInput';
                productPriceInput.type = 'number';
                productPriceInput.placeholder = 'Product Price';
                let productAvailabilityDropdown = modalBody.appendChild(document.createElement('select'));
                productAvailabilityDropdown.classList.add('form-select', 'mb-2');
                productAvailabilityDropdown.id = 'ProductAvailabilityDropdown';
                let productAvailabilityOption1 = productAvailabilityDropdown.appendChild(document.createElement('option'));
                productAvailabilityOption1.innerHTML = 'In stock';
                let productAvailabilityOption2 = productAvailabilityDropdown.appendChild(document.createElement('option'));
                productAvailabilityOption2.innerHTML = 'Out of stock';
                let modalFooter = modalContent.querySelector('.modal-footer');
                let addProductBTN = modalFooter.appendChild(document.createElement('button'));
                addProductBTN.classList.add('btn', 'btn-primary');
                addProductBTN.id = 'AddProductBTN';
                addProductBTN.innerHTML = 'Add Product';
                addProductBTN.setAttribute('data-bs-dismiss', 'modal');
            }
            SetupAddProductModal();
        }
        SetupInterface();

        let SetupEventListeners = () =>
        {
            let SetupPlusButtonEventListeners = () =>
            {
                let plusBTN = document.getElementById('PlusBTN');
                plusBTN.addEventListener('click', () =>
                {
                    let modal = new bootstrap.Modal(document.getElementById('AddProductModal'));
                    modal.show();
                });
            }
            SetupPlusButtonEventListeners();

            let SetupAddProductButtonEventListeners = () =>
            {
                let addProductBTN = document.getElementById('AddProductBTN');
                addProductBTN.addEventListener('click', async () =>
                {
                    let productsListPNL = document.getElementById('ProductsListPNL');
                    let productNameInputModal = document.getElementById('ProductNameInput');
                    let productDescriptionInputModal = document.getElementById('ProductDescriptionInput');
                    let productPriceInputModal = document.getElementById('ProductPriceInput');
                    let productAvailabilityDropdownModal = document.getElementById('ProductAvailabilityDropdown');
                    await Features_Products.CreateNewProduct(productsListPNL);
                    let productPNL = productsListPNL.lastChild;
                    productPNL.querySelector('.product-name').value = productNameInputModal.value;
                    productPNL.querySelector('.product-name').style.width = `${productPNL.querySelector('.product-name').value.length * 16}px`;
                    let id = 0;
                    do
                    {
                        id = Math.floor(Math.random() * 1000000);
                    }
                    while (Features_Products.products.find(product => product.id === id));
                    productPNL.querySelector('.product-id').innerHTML = `#${id}`;
                    productPNL.querySelector('.product-price').value = productPriceInputModal.value;
                    productPNL.querySelector('.product-price').style.width = `${productPNL.querySelector('.product-price').value.length * 15}px`;
                    productPNL.querySelector('.product-description').value = productDescriptionInputModal.value;
                    let productAvailabilityDropdown = productPNL.querySelector('.product-availability-dropdown');
                    let option1 = productAvailabilityDropdown.appendChild(document.createElement('option'));
                    let option2 = productAvailabilityDropdown.appendChild(document.createElement('option'));
                    switch (productAvailabilityDropdownModal.value)
                    {
                        case 'In stock':
                            option1.innerHTML = 'In stock';
                            productAvailabilityDropdown.classList.add('tmpcolor_03c41e');
                            option2.innerHTML = 'Out of stock';
                            option2.classList.add('tmpcolor_ed4337');
                            break;
                        case 'Out of stock':
                            option1.innerHTML = 'Out of stock';
                            productAvailabilityDropdown.classList.add('tmpcolor_ed4337');
                            option2.innerHTML = 'In stock';
                            option2.classList.add('tmpcolor_03c41e');
                            break;
                    }
                    Features_Products.OnProductsStateChanged();
                });
            }
            SetupAddProductButtonEventListeners();

            let SetupSearchButtonEventListeners = () =>
            {
                let searchProductBTN = document.getElementById('SearchProductBTN');
                let searchProductInput = document.getElementById('SearchProductInput');
                searchProductBTN.addEventListener('click', async () =>
                {
                    if (searchProductInput.value === '')
                    {
                        Features_Products.ResetSearch();
                        return;
                    }

                    Features_Products.OnProductsSearch(searchProductInput.value);
                });
            }
            SetupSearchButtonEventListeners();
        }
        SetupEventListeners();

        Features_Products.Assign();
    }
    static async Assign()
    {
        const response = await fetch('/Assets/Application_Main/features/products/scripts/json/products.json');
        const products = await response.json();

        if (products.length === 0) return;
        let productsPNL = document.getElementById('ProductsPNL');
        let productsPanelPlaceholderPNL = document.getElementById('ProductsPanelPlaceholderPNL');
        productsPanelPlaceholderPNL.classList.remove('d-flex');
        productsPanelPlaceholderPNL.classList.add('d-none');

        let productsListPNL = productsPNL.appendChild(document.createElement('div'));
        productsListPNL.classList.add('d-flex', 'flex-column', 'm-0', 'p-2', 'overflow-auto');
        productsListPNL.id = 'ProductsListPNL';
        for (let product of products)
        {
            await Features_Products.CreateNewProduct(productsListPNL);
            let productPNL = productsListPNL.lastChild;
            productPNL.querySelector('.product-name').value = product.name;
            productPNL.querySelector('.product-name').style.width = `${productPNL.querySelector('.product-name').value.length * 16}px`;
            productPNL.querySelector('.product-id').innerHTML = `#${product.id}`;
            productPNL.querySelector('.product-price').value = `${(Math.round(product.price * 100) / 100).toFixed(2)}`;
            productPNL.querySelector('.product-price').style.width = `${productPNL.querySelector('.product-price').value.length * 15}px`;
            productPNL.querySelector('.product-description').value = product.description;
            let productAvailabilityDropdown = productPNL.querySelector('.product-availability-dropdown');
            let option1 = productAvailabilityDropdown.appendChild(document.createElement('option'));
            let option2 = productAvailabilityDropdown.appendChild(document.createElement('option'));
            switch (product.availability)
            {
                case 'In stock':
                    option1.innerHTML = 'In stock';
                    productAvailabilityDropdown.classList.add('tmpcolor_03c41e');
                    option2.innerHTML = 'Out of stock';
                    option2.classList.add('tmpcolor_ed4337');
                    break;
                case 'Out of stock':
                    option1.innerHTML = 'Out of stock';
                    productAvailabilityDropdown.classList.add('tmpcolor_ed4337');
                    option2.innerHTML = 'In stock';
                    option2.classList.add('tmpcolor_03c41e');
                    break;
            }
        }
    }
    static async CreateNewProduct(productsListPNL)
    {
        let productPNL = productsListPNL.appendChild(document.createElement('div'));
        productPNL.classList.add('d-flex', 'flex-column', 'p-3', 'border', 'border-secondary', 'm-2');
        let upperPNL = productPNL.appendChild(document.createElement('div'));
        upperPNL.classList.add('d-flex', 'flex-row', 'w-100', 'h-25', 'm-0', 'p-0');
        let upperLeftPNL = upperPNL.appendChild(document.createElement('div'));
        upperLeftPNL.classList.add('d-flex', 'flex-row', 'w-50', 'h-100', 'm-0', 'p-0', 'justify-content-start', 'align-items-center');
        let productNameTMP = upperLeftPNL.appendChild(document.createElement('textarea'));
        productNameTMP.classList.add('h3', 'h-100', 'ms-0', 'me-1', 'my-0', 'p-0', 'product-name');
        let productIDTMP = upperLeftPNL.appendChild(document.createElement('h6'));
        productIDTMP.classList.add('ms-1', 'me-0', 'my-0', 'p-0', 'tmpcolor_8d8d8d', 'product-id');
        let upperRightPNL = upperPNL.appendChild(document.createElement('div'));
        upperRightPNL.classList.add('d-flex', 'flex-row', 'w-55', 'h-100', 'm-0', 'p-0', 'justify-content-end', 'align-items-center');
        let productPricePlaceholderTMP = upperRightPNL.appendChild(document.createElement('h3'));
        productPricePlaceholderTMP.classList.add('h-100', 'm-0', 'p-0', 'text-end');
        productPricePlaceholderTMP.innerHTML = '$';
        let productPriceValueTMP = upperRightPNL.appendChild(document.createElement('textarea'));
        productPriceValueTMP.classList.add('h3', 'h-100', 'm-0', 'p-0', 'text-end', 'overflow-hidden', 'product-price');
        productPriceValueTMP.style.width = `auto`;
        let middlePNL = productPNL.appendChild(document.createElement('div'));
        middlePNL.classList.add('d-flex', 'flex-row', 'w-100', 'h-50', 'm-0', 'p-0');
        let middleLeftPNL = middlePNL.appendChild(document.createElement('div'));
        middleLeftPNL.classList.add('d-flex', 'flex-row', 'w-50', 'h-100', 'm-0', 'p-0', 'justify-content-start', 'align-items-center');
        let productDescriptionTMP = middleLeftPNL.appendChild(document.createElement('textarea'));
        productDescriptionTMP.classList.add('w-100', 'h-100', 'm-0', 'p-0', 'product-description');
        let middleRightPNL = middlePNL.appendChild(document.createElement('div'));
        middleRightPNL.classList.add('d-flex', 'flex-row', 'w-50', 'h-100', 'm-0', 'p-0', 'justify-content-end', 'align-items-start');
        let productAvailabilityDropdown = middleRightPNL.appendChild(document.createElement('select'));
        productAvailabilityDropdown.classList.add('h6', 'w-50', 'h-40', 'm-0', 'p-0', 'text-end', 'product-availability-dropdown');
        let lowerPNL = productPNL.appendChild(document.createElement('div'));
        lowerPNL.classList.add('d-flex', 'flex-row', 'w-100', 'h-20', 'm-0', 'p-0');
        let lowerLeftPNL = lowerPNL.appendChild(document.createElement('div'));
        lowerLeftPNL.classList.add('d-flex', 'flex-row', 'w-50', 'h-100', 'm-0', 'p-0', 'justify-content-start', 'align-items-center');
        let lowerRightPNL = lowerPNL.appendChild(document.createElement('div'));
        lowerRightPNL.classList.add('d-flex', 'flex-row', 'w-50', 'h-100', 'm-0', 'p-0', 'justify-content-end', 'align-items-center');
        let deleteProductBTN = lowerRightPNL.appendChild(document.createElement('button'));
        deleteProductBTN.classList.add('btn', 'h-100', 'm-0', 'p-0', 'delete-button');
        deleteProductBTN.innerHTML = '<i class="fas fa-trash"></i>';

        Features_Products.products.push(new Product(productPNL));
    }
    static async OnProductsStateChanged()
    {
        let products = [];
        for (let product of Features_Products.products)
        {
            let params =
            {
                "id": product.id,
                "name": product.name,
                "description": product.description,
                "price": product.price,
                "availability": product.availability
            };
            products.push(params);
        }

        await fetch('/api/products',
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        });
    }
    static async OnProductsSearch(id)
    {
        let productsListPNL = document.getElementById('ProductsListPNL');
        await fetch(`/api/products/${id}`)
        .then(response =>
        {
            return response.ok;
        })
        .then(status =>
        {
            switch (status)
            {
                case true:
                    productsListPNL.classList.remove('d-none');
                    productsListPNL.classList.add('d-flex');
                    for (let product of productsListPNL.children)
                    {
                        let productID = product.querySelector('.product-id').innerHTML;
                        switch (productID.replace('#', '') === id)
                        {
                            case true:
                                product.classList.remove('d-none');
                                product.classList.add('d-flex');
                                break;
                            case false:
                                product.classList.remove('d-flex');
                                product.classList.add('d-none');
                                break;
                        }
                    }
                    break;
                case false:
                    productsListPNL.classList.remove('d-flex');
                    productsListPNL.classList.add('d-none');
                    let productsPanelPlaceholderPNL = document.getElementById('ProductsPanelPlaceholderPNL');
                    productsPanelPlaceholderPNL.classList.remove('d-none');
                    productsPanelPlaceholderPNL.classList.add('d-flex');
                    break;
            }
        });
    }
    static ResetSearch()
    {
        let productsListPNL = document.getElementById('ProductsListPNL');
        productsListPNL.classList.remove('d-none');
        productsListPNL.classList.add('d-flex');
        let productsPanelPlaceholderPNL = document.getElementById('ProductsPanelPlaceholderPNL');
        productsPanelPlaceholderPNL.classList.remove('d-flex');
        productsPanelPlaceholderPNL.classList.add('d-none');
        for (let product of productsListPNL.children)
        {
            product.classList.remove('d-none');
            product.classList.add('d-flex');
        }
    }

}
Features_Products.Setup();

class Product
{
    #parent;
    #timeout;

    constructor(parent)
    {
        this.#parent = parent;
        this.#Setup();
    }

    #Setup()
    {
        let SetupEventListeners = () =>
        {
            let SetupTitleEventListeners = () =>
            {
                let productNameTMP = this.#parent.querySelector('.product-name');
                productNameTMP.addEventListener('input', () =>
                {
                    productNameTMP.style.width = `${productNameTMP.value.length * 16}px`;
                    this.#ResetTimeout();
                });
            }
            SetupTitleEventListeners();

            let SetupDescriptionEventListeners = () =>
            {
                let productDescriptionTMP = this.#parent.querySelector('.product-description');
                productDescriptionTMP.addEventListener('input', () =>
                {
                    this.#ResetTimeout();
                });
            }
            SetupDescriptionEventListeners();

            let SetupPriceEventListeners = () =>
            {
                let productPriceValueTMP = this.#parent.querySelector('.product-price');
                productPriceValueTMP.addEventListener('input', () =>
                {
                    productPriceValueTMP.style.width = `${productPriceValueTMP.value.length * 15}px`;
                    this.#ResetTimeout();
                });
            }
            SetupPriceEventListeners();

            let SetupAvailabilityEventListeners = () =>
            {
                let productAvailabilityDropdown = this.#parent.querySelector('.product-availability-dropdown');
                productAvailabilityDropdown.addEventListener('change', () =>
                {
                    this.#ResetTimeout();
                });
            }
            SetupAvailabilityEventListeners();

            let SetupDeleteButtonEventListeners = () =>
            {
                let deleteProductBTN = this.#parent.querySelector('.delete-button');
                deleteProductBTN.addEventListener('click', () =>
                {
                    this.#parent.remove();
                    Features_Products.products.splice(Features_Products.products.indexOf(this), 1);
                    this.#ResetTimeout();
                });
            }
            SetupDeleteButtonEventListeners();
        }
        SetupEventListeners();
    }
    #ResetTimeout()
    {
        if (this.#timeout)
            clearTimeout(this.#timeout);
        this.#timeout = setTimeout(() => Features_Products.OnProductsStateChanged(), 1000);
    }

    get id()
    {
        let id = this.#parent.querySelector('.product-id').innerHTML;
        return id.replace('#', '');
    }
    get name()
    {
        return this.#parent.querySelector('.product-name').value;
    }
    get description()
    {
        return this.#parent.querySelector('.product-description').value;
    }
    get price()
    {
        let price = this.#parent.querySelector('.product-price').value;
        return parseFloat(price.replace('$', ''));
    }
    get availability()
    {
        return this.#parent.querySelector('.product-availability-dropdown').value;
    }
}
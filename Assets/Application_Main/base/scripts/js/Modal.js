class Modal
{
    #parent;
    #instance;

    constructor(parent)
    {
        this.#parent = parent;
        this.#Setup();
    }

    #Setup()
    {
        let SetupInterface = () =>
        {
            this.#instance = this.#parent.appendChild(document.createElement("div"));
            this.#instance.classList.add("modal", "fade");
            let modalDialog = this.#instance.appendChild(document.createElement("div"));
            modalDialog.classList.add("d-flex", "flex-row", "w-100", "h-50", "m-0", "p-0", "modal-dialog");
            modalDialog.style.top = '50%';
            modalDialog.style.left = '50%';
            modalDialog.style.transform = 'translate(-50%, -50%)';
            let modalContent = modalDialog.appendChild(document.createElement("div"));
            modalContent.classList.add("modal-content", "m-0", "p-4");
            let modalHeader = modalContent.appendChild(document.createElement("div"));
            modalHeader.classList.add("modal-header", "mx-0", "mt-0", "mb-2", "px-3", "pt-2", "pb-0");
            let modalBody = modalContent.appendChild(document.createElement("div"));
            modalBody.classList.add("modal-body", "m-0", "px-3", "py-0");
            let modalFooter = modalContent.appendChild(document.createElement("div"));
            modalFooter.classList.add("modal-footer", "m-0", "px-3", "py-2");
        }
        SetupInterface();
    }
}
class ContextMenu
{
    #parent;
    #options;
    #instance;

    constructor(parent, options)
    {
        this.#parent = parent;
        this.#options = options;

        this.#Setup();
    }

    #Setup()
    {
        let SetupInterface = () =>
        {
            this.#instance = this.#parent.appendChild(document.createElement("div"));
            this.#instance.classList.add("d-none", "rounded-1", "context-menu");
            let contextMenuOptions = this.#instance.appendChild(document.createElement("ul"));
            contextMenuOptions.classList.add("context-menu-options");

            for (let i = 0; i < this.#options.length; i++)
            {
                let option = this.#options[i];
                let optionElement = contextMenuOptions.appendChild(document.createElement("li"));
                optionElement.classList.add("mx-2", "p-1", "SansationRegular", "tmp_8d8d8d", "context-menu-option");

                if (i == 0)
                    optionElement.classList.add("mt-2")
                if (i == this.#options.length - 1)
                    optionElement.classList.add("mb-2")
                if (i != 0 && i != this.#options.length - 1)
                    optionElement.classList.add("my-0")

                let optionIcon = optionElement.appendChild(document.createElement("i"));
                optionIcon.classList.add("fa-solid", option.icon, "m-1", "p-0", "tmp_8d8d8d", "context-menu-option-icon");
                let optionLink = optionElement.appendChild(document.createElement("a"));
                optionLink.classList.add("m-1", "p-0", "tmp_ed4337", "context-menu-option-link");
                optionLink.href = "#";
                optionLink.innerHTML = option.name;
                optionElement.addEventListener("click", option.action);
            }
        }
        SetupInterface();

        let SetupEventListeners = () =>
        {
            this.#parent.addEventListener("contextmenu", (e) =>
            {
                e.preventDefault();
                this.#instance.classList.remove("d-none");
                this.#instance.classList.add("d-block");
                this.#instance.style.left = e.clientX + "px";
                this.#instance.style.top = e.clientY + "px";
                e.stopPropagation();
            });
            this.#instance.addEventListener("mouseleave", () =>
            {
                this.#instance.classList.remove("d-block");
                this.#instance.classList.add("d-none");
            });
            this.#instance.addEventListener("click", () =>
            {
                this.#instance.classList.remove("d-block");
                this.#instance.classList.add("d-none");
            });
        }
        SetupEventListeners();
    }
}
class ContextMenuOption
{
    #name;
    #icon;
    #action;

    constructor(name, icon, action)
    {
        this.#name = name;
        this.#icon = icon;
        this.#action = action;
    }

    get name()
    {
        return this.#name;
    }
    get icon()
    {
        return this.#icon;
    }
    get action()
    {
        return this.#action;
    }
}
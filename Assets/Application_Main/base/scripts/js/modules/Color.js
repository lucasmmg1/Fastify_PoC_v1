class Color
{
    static GenerateHexColor()
    {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    static ConvertHexToRGB(hex, alpha)
    {
        const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
        return alpha ? "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")" : "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

export default Color;
const Boton = ({children, className, ...args}) => {
    return (
        <button className={`${className} text-blackrounded-none px-4 py-2 text-sm font-semibold text-white`} {...args}>
            {children}
        </button>
    )
}

export default Boton
import { GenericProps } from "../types"

interface Options {
    block: string,
    inline: string,
    flex: string,
    grid: string,
    table: string
}

const addDisplay = ({ d, hidden }: GenericProps) => {
    if (hidden) return 'display: none;'

    const options = {
        'block': 'block',
        'inline': 'inline',
        'flex': 'flex',
        'grid': 'grid',
        'table': 'table'
    } as Options

    if (d) {
        return `display: ${options[d]};`
    }

    return ''
}

export { addDisplay }
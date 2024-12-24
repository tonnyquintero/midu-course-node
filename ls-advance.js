const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] || '.'

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error('No se pudo leer el directorio')
        process.exit(1)
    }
    const filePromises = files.map(async file => { 
        const filePath = path.join(folder, file)
        let stats

        try {
            stats = await fs.stat(filePath)
        } catch {
            console.error(`No se pudo leer el archivo ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'D' : 'F'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

    const filesinfo = await Promise.all(filePromises)

    filesinfo.forEach(fileinfo => { console.log(fileinfo) })
}

ls(folder)

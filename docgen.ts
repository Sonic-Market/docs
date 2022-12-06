import * as fs from 'fs'
import * as path from 'path'
import * as child_process from 'child_process'

const runCommand = (command: string, workdir: string) => {
  child_process.execSync(command, {
    cwd: workdir,
  })
}

const removeFileIfExists = (folderPath: string) => {
  if (!fs.existsSync(folderPath)) {
    return
  }
  const files = fs.readdirSync(folderPath)
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(folderPath, file)
      fs.unlinkSync(filePath)
      console.log(`remove file: ${filePath}`)
    }
  }
}

const copyFile = (src: string, dest: string) => {
  const files = fs.readdirSync(src)
  for (const file of files) {
    if (file.endsWith('.md')) {
      const sourceFilePath = path.join(src, file)
      const targetFilePath = path.join(dest, file)
      fs.copyFileSync(sourceFilePath, targetFilePath)
      console.log(`copy file from ${sourceFilePath} to ${targetFilePath}`)
    }
  }
}

const main = async () => {
  removeFileIfExists('docs/contracts/core')
  removeFileIfExists('docs/contracts/library')
  removeFileIfExists('core/docs')
  removeFileIfExists('library/docs')

  console.log('1. update git submodule')
  child_process.execSync('git submodule update --remote')
  console.log('2. npm install in core modules')
  runCommand('npm install --ignore-scripts', 'core')
  console.log('3. npm install in library modules')
  runCommand('npm install --ignore-scripts', 'library')
  console.log('4. generate docs from core contracts')
  runCommand('npx hardhat utils:gen-docs', 'core')
  console.log('5. generate docs from library contracts')
  runCommand('npx hardhat utils:gen-docs', 'library')

  copyFile('core/docs', 'docs/contracts/core')
  copyFile('library/docs', 'docs/contracts/library')
}

main()

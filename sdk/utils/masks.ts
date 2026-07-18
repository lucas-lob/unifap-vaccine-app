export const applyCpfMask = (cpf: string) => {
  let cpfWithoutMask = cpf.replace(/\D/g, '')
  const cpfWithoutMaskLength = cpfWithoutMask.length

  if (cpfWithoutMaskLength < 2) {
    return cpfWithoutMask
  } else if (cpfWithoutMaskLength < 7) {
    return cpfWithoutMask.replace(/^(\d{3})(\d{1,3})$/, '$1.$2')
  } else if (cpfWithoutMaskLength < 10) {
    return cpfWithoutMask.replace(/^(\d{3})(\d{3})(\d{1,3})$/, '$1.$2.$3')
  } else  {
    return cpfWithoutMask.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, '$1.$2.$3-$4')
  } 
}
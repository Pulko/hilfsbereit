interface ClassObject {
  [key: string]: boolean
}

function classnames(defaultNames: string[], conditionalClasses?: ClassObject) {
  return conditionalClasses
    ? Object.keys(conditionalClasses).reduce((classes, currentKey) => (
      (!!conditionalClasses[currentKey])
        ? (classes as string).concat(' ' + currentKey)
        : classes
    ), defaultNames.join(' '))
    : defaultNames.join(' ')
}

export default classnames
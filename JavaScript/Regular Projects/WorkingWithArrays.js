let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop()

console.log(secretMessage.length)


secretMessage.push('to','Program')

secretMessage[secretMessage.indexOf('easily')] = 'right'

secretMessage.shift()

secretMessage.unshift('Programming')

let removals = ['get', 'right', 'the', 'first','time']

let indexOfGet = secretMessage.indexOf('get');
secretMessage.splice(indexOfGet,5,'know,')


console.log(secretMessage.join(' '))
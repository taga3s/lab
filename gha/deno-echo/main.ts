const SOME_VAR = Deno.env.get('SOME_VAR') ?? ''
const MESSAGE = Deno.args[0] ?? ''

function main() {
  if (SOME_VAR === "this is secret") {
    console.log(MESSAGE)
  }
  console.log('Done')
}

main()

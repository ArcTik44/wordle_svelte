// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Response{
			word:string
		}
	}
}

export {
	Response
};

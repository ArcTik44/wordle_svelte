<script lang="ts">
    export let used_words:string[];
    export let guess_word:string;

    const positionOk = (ch:string, i:number):boolean =>{
        if (ch == [...guess_word][i]){
          return true
        }
        else return false
    }

    const positionBad = (ch:string, i:number):boolean =>{
        if ([...guess_word].includes(ch)&&[...guess_word][i]!=ch){
            return true
        }
        else return false
    }

    const badChar = (ch:string):boolean =>{
        if ([...guess_word].includes(ch)!=true){
            return true
        }
        else return false
    }

</script>

<div style="display: flex; flex-direction:column">
        {#each used_words as word, x}
        <div style="display: flex; flex-direction:row ">
            {#each [...word] as ch,i }
                {#if positionOk(ch,i)}
                <div class="position_ok">{ch}</div>
                {/if}

                {#if positionBad(ch,i)}
                <div class="position_bad">{ch}</div>
                {/if}
                
                {#if badChar(ch)}
                <div class="bad_char">{ch}</div>
                {/if}

            {/each}
        </div>
        {/each}
</div>

<style>
    .position_ok{
        width: 3em;
		height: 3em;
		background-color: #5F8;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid black;
    }

    .position_bad{
        width: 3em;
		height: 3em;
		background-color: rgb(255, 240, 29);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid black;
    }
    .bad_char{
        width: 3em;
		height: 3em;
		background-color: rgb(255, 72, 72);
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid black;
    }
</style>
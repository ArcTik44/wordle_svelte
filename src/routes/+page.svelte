<script lang="ts">
    import axios from "axios";
    let used_words: string[] = [];

    let attempts: number = 0;
    let guess_word: string;
    let guess_word_len: number = 5;

    let some_word: string = "";

    const getWord = async () => {
        attempts = 5;
        const data = await axios.get(
            "https://random-word-api.vercel.app/api?words=1&length=" +
                guess_word_len
        );
        guess_word = data.data[0];
        console.log(guess_word);
    };

    const checkWord = () => {
        if (attempts == 0) {
            attempts = "No attempts, try another word";
        }
        used_words.push(some_word);
        console.log(used_words);
        attempts -= 1;

        switch (some_word) {
            case guess_word:
                alert(some_word + " is the word of the day");
                break;
        }
        for (let i = 0; i < some_word.length; i++) {
            if (some_word[i] == guess_word[i]) {
                console.log(some_word[i] + " is on right position");
            } else {
                console.log(some_word[i] + " is not on right position");
            }
        }
    };
</script>

<div style="padding-left: 1.5rem;">
    <h1>Welcome to SvelteWordle</h1>
    <p><strong>Guess the word of the day!</strong></p>
    {#if attempts == 0}
        <span>No more attempts</span>
    {/if}

    {#if attempts > 0}
        <span>Remaining attempts: {attempts}</span>
    {/if}
    <div>
        <span>Length: {guess_word_len}</span>
        <input type="range" min="3" max="8" bind:value={guess_word_len} />
    </div>
    <div>
        <input
            style="max-width: 15%;"
            class="form-control"
            type="text"
            bind:value={some_word}
            maxlength={guess_word_len}
        />
    </div>
    <div style="padding-top: 1.5rem;">
        <button class="btn btn-primary" on:click={checkWord}>Check</button>
    </div>

    <div style="padding-top: 1.5rem;">
        <button class="btn btn-primary" on:click={getWord}>Get Word</button>
    </div>

    <div style="padding-top: 1.5rem;">
        <h4>Used words</h4>
        {#each used_words as word}
            <p>{word}</p>
        {/each}
    </div>
</div>

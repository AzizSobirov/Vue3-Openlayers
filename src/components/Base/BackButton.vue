<template>
    <button :class="($style.btn)">
        <div><img src="@/assets/arrow-left.svg"></div>
        <div :class="($style.text)">Предыдущая</div>
    </button>
</template>

<style module>
.btn{
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    padding: 8px 14px;
}
.text{
    font-weight: 500;
    font-family: sans-serif;
    font-size: 14px;
    color: black;
}
</style>
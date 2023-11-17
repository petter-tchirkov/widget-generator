<template>
  <div class="container">
    <label class="mark">
      <input
        type="radio"
        name="mark"
      />
      <span class="checkmark">1</span>
    </label>
    <label class="mark">
      <input
        type="radio"
        name="mark"
      />
      <span class="checkmark">2</span>
    </label>
    <label class="mark">
      <input
        type="radio"
        name="mark"
      />
      <span class="checkmark">3</span>
    </label>
    <label class="mark">
      <input
        type="radio"
        name="mark"
      />
      <span class="checkmark">4</span>
    </label>
    <label class="mark">
      <input
        type="radio"
        name="mark"
      />
      <span class="checkmark">5</span>
    </label>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  height: 24px;
  margin-bottom: 20px;
}

.mark {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.checkmark svg {
  width: 24px;
  height: 24px;
}

.container input:checked ~ .checkmark {
  border: 2px solid #2196f3;
  color: #2196f3;
}
</style>

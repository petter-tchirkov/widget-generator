export const markForm = `
  <div class="container">
    <label class="mark">
      <input type="radio" name="mark" />
      <span class="checkmark">1</span>
    </label>
    <label class="mark">
      <input type="radio" name="mark" />
      <span class="checkmark">2</span>
    </label>
    <label class="mark">
      <input type="radio" name="mark" />
      <span class="checkmark">3</span>
    </label>
    <label class="mark">
      <input type="radio" name="mark" />
      <span class="checkmark">4</span>
    </label>
    <label class="mark">
      <input type="radio" name="mark" />
      <span class="checkmark">5</span>
    </label>
  </div>
`

export const markFormCss = `
  .container {
    display: flex;
    justify-content: space-around;
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
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkmark svg {
    width: 24px;
    height: 24px;
  }

  .container input:checked ~ .checkmark {
    border: 1px solid #2196F3;
    color: #2196F3;
  }
`

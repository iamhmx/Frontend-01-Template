# ECMAScript Language

### 一般命令式编程语言构成
  1. Atom（原子）
     - Identifier
     - Literal
  2. Expression（表达式）
     - Atom
     - Operator
     - Punctuator
  3. Statement（语句）
     - Expression
     - Keyword
     - Punctuator
  4. Structure（结构）
     - Function
     - Class
     - Process
     - Namespace
  5. Program（程序）
     - Program
     - Mould
     - Package
     - Library

#### Atom Identifier & Literal

  - WhiteSpace
    - \<TAB\>：`\t`
    - \<VT\>： `\v`
    - \<FF\>：`\f` 
    - \<SP\>：`\s`
    - \<NBSP\>：NO-BREAK SPACE
    - \<ZWNBSP\>：ZERO WIDTH NO-BREAK SPACE
    - \<USP\>
  - LineTerminator
    - \<LF\>：`\n`
    - \<CR\>：`\r`
    - \<LS\>
    - \<PS\>
  - Comment
    - // comment
    - /* comment */
  - CommonToken
    - IdentifierName
    - Punctuator
    - NumericLiteral
    - StringLiteral
    - Template

#### 基本类型
- Type
  - Number
    - 浮点数比较: 0.1 + 0.2 - 0.3 < Number.EPSILON
  - String
  - Boolean
  - Null
  - Undifined
  - Symbol
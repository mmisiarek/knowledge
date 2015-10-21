### Surroundings with vim-surround

[vim-surround](https://github.com/tpope/vim-surround)

#### Adding surroundings
> Note: Instead of `iw` can be used any other [textobject](textobjects.md)

* `ysiw'` - from `Hello` to `'Hello'`
* `ysiw{` - from 'Hello' to `{ Hello }`. Using `}` instead of `{` will
  surround without spaces: `{Hello}`. Same thing with `[]()`.
* `ysip<p>` - will surround parapraph with `<p></p>`

#### Changing surroundings
`cs[from][to]`
* `cs'"` - from `'Some example sentence.'` to `"Some example sentence."`

#### Removing surroundings
* `ds"` - from `'"Some example sentence."'` to `'Some example sentence.'`

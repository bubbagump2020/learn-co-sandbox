var word
word = 'bird'

console.log(word)

word = 'dog'

bands = {
  joy_division: %w[ian bernard peter stephen],
  the_smiths: %w[johnny andy morrissey mike],
  the_cramps: %w[lux ivy nick],
  blondie: %w[debbie chris clem jimmy nigel]
  talking_heads: %w[david tina chris jerry]
}
#each and each_pair
bands.each {|pair| p pair}
bands.each_pair {|pair| p pair}

#
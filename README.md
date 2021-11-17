# Parse Chinese Number

A simple but powerful module converting between Chinese numeral into number value and vice versa.

```javascript
import { parseChineseNumber } from "parse-chinese-number";

parseChineseNumber("十二點三"): // 12.3
parseChineseNumber("點三"): // 0.3
parseChineseNumber("負六"): // -6
parseChineseNumber("萬五"): // 15000
parseChineseNumber("三億五千萬"): // 350000000

```

```javascript
import { toChineseNumber } from "parse-chinese-number";

toChineseNumber(1234); // "一千二百三十四"
toChineseNumber(-654321.1234); // "負六十五萬四千三百二十一點一二三四"
toChineseNumber(2300450607800); // "二兆三千零四億五千零六十萬七千八百"
```

## Chinese Variants

Variants are supported when parsing number. For example, "一" and "壹" are inter-changeable.

| Character | Variants                  |
| --------- | ------------------------- |
| 一        | 壹, 乙, 1, １             |
| 二        | 貳, 貮, 贰, 兩, 两, 2, ２ |
| 三        | 參, 叁, 参, 叄, 3, ３     |
| 四        | 肆, 4, ４                 |
| 五        | 伍, 5, ５                 |
| 六        | 陸, 陆, 6, ６             |
| 七        | 柒, 7, ７                 |
| 八        | 捌, 8, ８                 |
| 九        | 玖, 9, ９                 |
| 零        | 〇, 0, ０                 |
| 十        | 拾                        |
| 百        | 佰                        |
| 千        | 仟                        |
| 萬        | 万                        |
| 億        | 亿                        |

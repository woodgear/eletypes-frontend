import { CHINESE_MODE, ENGLISH_MODE } from "../constants/Constants";
import {
  ENGLISH_SENTENCES,
  CHINESE_SENTENCES,
} from "../constants/SentencesCollection";
import { randomIntFromRange } from "./randomUtils";

const sentencesGenerator = (sentencesCount, language) => {
  const len=Object.keys(ENGLISH_SENTENCES).length;
  if (language === ENGLISH_MODE) {
    const EnglishSentencesList = [];
    if (sentencesCount >= len) {
        return Object.values(ENGLISH_SENTENCES);
    }
    const sets= new Set();
    // simple and stupid way to generate random sentences
    for (let i = 0; i < sentencesCount*10; i++) {
      const rand = randomIntFromRange(0, len-1)
      if (sets.size === sentencesCount){
        break;
      }
      if (sets.has(rand)){
        continue;
      }
      sets.add(rand);
    }
    for(let i of sets){
      EnglishSentencesList.push(ENGLISH_SENTENCES[i]);
    }
    return EnglishSentencesList;
  }
  if (language === CHINESE_MODE) {
    const ChinseseSentencesList = [];
    for (let i = 0; i < sentencesCount; i++) {
      const rand = randomIntFromRange(0, 55);
      ChinseseSentencesList.push(CHINESE_SENTENCES[rand]);
    }
    return ChinseseSentencesList;
  }
};

export { sentencesGenerator };

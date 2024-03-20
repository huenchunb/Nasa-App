import sbd from 'sbd';

export const getFirstSentence = (paragraph: string): string | undefined => {
  const sentences = sbd.sentences(paragraph);

  if (sentences && sentences.length > 0) {
    return sentences[0];
  }
  
  return;
};

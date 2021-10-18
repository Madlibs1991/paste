interface Terms {
  alertText: Languages;
}

interface Languages {
  en: string;
  jp: string;
  ar: string;
  my: string;
}

export const terms: Terms = {
  alertText: {
    en: 'I am an alert',
    jp: '私は警告です',
    ar: 'أنا في حالة تأهب',
    my: 'ကျွန်ုပ်သည်သတိပေးချက်တစ်ခုဖြစ်သည်',
  },
};

import urlRegexForTest from 'url-regex-safe';

const urlRegex = urlRegexForTest({
    exact: true,
    parens: true,
});

export const urlValidator = (url: string): boolean => {
    return urlRegex.test(url);
};

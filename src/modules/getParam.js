const { searchParams } = new URL(location.href);

export const getParam = (param) => searchParams.get(param);

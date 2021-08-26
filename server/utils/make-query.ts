import { isEmptyObj, isEmptyToken } from './result-checker';
import { Op } from 'sequelize';

const makeWhereQueryWithDate = (key: string, startDate?: string, endDate?: string) => {
  const where = {
    [key]: {},
  };

  if (startDate && endDate) {
    const _endDate = new Date(endDate);
    _endDate.setDate(_endDate.getDate() + 1);

    where[key] = {
      [Op.between]: [new Date(startDate), new Date(endDate)],
    };
  } else if (startDate) {
    where[key] = {
      [Op.gte]: new Date(startDate),
    };
  } else if (endDate) {
    const _endDate = new Date(endDate);
    _endDate.setDate(_endDate.getDate() + 1);

    where[key] = {
      [Op.lte]: new Date(endDate),
    };
  } else {
    return {};
  }
  return where;
};

const makeWhereQueryWithObj = (obj: any) => {
  if (isEmptyObj(obj)) {
    return {};
  }

  Object.keys(obj).forEach((key) => {
    if (isEmptyToken(obj[key])) delete obj[key];
  });

  return obj;
};

const makeWhereQueryWithStringContain = (str: string) => {
  const where = {
    content: {},
  };
  if (str) {
    where.content = {
      [Op.like]: `%${str}%`,
    };
  }
  return where;
};

const makeWhereQueryWithRange = (minimum: number, maximum: number) => {
  const where = {
    value: {},
  };

  if (minimum && maximum) {
    where.value = {
      [Op.between]: [minimum, maximum],
    };
  } else if (minimum) {
    where.value = {
      [Op.gte]: minimum,
    };
  } else if (maximum) {
    where.value = {
      [Op.lte]: maximum,
    };
  }
  return where;
};
export {
  makeWhereQueryWithDate,
  makeWhereQueryWithObj,
  makeWhereQueryWithStringContain,
  makeWhereQueryWithRange,
};

import { isEmptyObj, isEmptyToken } from "./result-checker";
import { Op } from "sequelize";

const makeWhereQueryWithDate = (startDate: string, endDate: Date) => {
    const where = {
        time: {}
    };

    if (startDate && endDate) {
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate() + 1);
    
        where.time = {
            [Op.between]: [new Date(startDate), new Date(endDate)],
        };
    } else if (startDate) {
        where.time = {
            [Op.gte]: new Date(startDate),
        };
    } else if (endDate) {
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate() + 1);
        
        where.time = {
            [Op.lte]: new Date(endDate),
        };
    }
    return where;
}

const makeWhereQueryWithObj = (obj: any) => {
    if (isEmptyObj(obj)) {
        return {};
    } 

    Object.keys(obj).forEach(key => {
        if (isEmptyToken(obj[key])) delete obj[key];
    });

    return obj;
}

const makeWhereQueryWithStringContain = (str: string) => {
    const where = {
        content: {}
    };
    if (str) {
        where.content = {
            [Op.like]: `%${str}%`
        };
    }
    return where;
}

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
        }
    } else if (maximum) {
        where.value = {
            [Op.lte]: maximum,
        }
    }
    return where;
}
export default {
    makeWhereQueryWithDate,
    makeWhereQueryWithObj,
    makeWhereQueryWithStringContain,
    makeWhereQueryWithRange,
};
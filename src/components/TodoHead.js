import React from "react";
import styled from "styled-components";

const days = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
}

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

const TodoHead = () => {

    const today = new Date();

    return (
        <TodoHeadBlock>
            <h1>{`${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일`}</h1>
            <div className="day">{`${days[today.getDay()]}`}</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
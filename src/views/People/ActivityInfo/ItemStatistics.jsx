import React from 'react';
import { default as EyeIcon } from "../../../_starter/shared/Icons/Eye";
import { default as ClickIcon } from "../../../_starter/shared/Icons/Click";
import { default as ReplyIcon } from "../../../_starter/shared/Icons/Reply";

function ItemStatistics({ dynamic_data }) {
    return (
        <label>
            <label>{dynamic_data.user_name} | </label>
            <EyeIcon></EyeIcon>
            <label>{dynamic_data.counts.views}</label>
            <ClickIcon></ClickIcon>
            <label>{dynamic_data.counts.clicks}</label>
            <ReplyIcon></ReplyIcon>
            <label>{dynamic_data.counts.replies}</label>
        </label>
    );
}
export default ItemStatistics;
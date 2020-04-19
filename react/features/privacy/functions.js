/* global config */

import React from 'react';
const resolveUrl = require('resolve-url');

/**
 * Method used in order to render the privacy page link.
 *
 * @returns {ReactElement}
 */
export function renderPrivacyLink() {
    if (config && config.privacyPage && config.privacyPage.url && config.privacyPage.name) {
        return (
            <a href = { config.privacyPage.url }><b>{ config.privacyPage.name }</b></a>
        );
    }
}

/**
 * Method used in order to render a div with a link to the privacy page.
 *
 * @returns {ReactElement}
 */
export function renderPrivacyDiv() {
    return <div> <p> { '\u00A0' } </p> <p> { renderPrivacyLink() } </p> <p> { '\u00A0' } </p> </div>;
}

/**
 * Method used in order to get a text string with link to the privacy page.
 *
 * @returns {String}
 */
export function getPrivacyTxt() {
    if (config && config.privacyPage && config.privacyPage.url && config.privacyPage.name) {
        const privacyUrl = resolveUrl(
            'https://'+config.hosts.domain, config.privacyPage.url
        );
        return '\n'+config.privacyPage.name + ':\n' + privacyUrl;
    } else {
        return '';
    }
}

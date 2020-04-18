/* global config */

import React from 'react';

/**
 * Method used in order to render a privacy page link.
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
 * Method used in order to render a div with a link to a privacy page.
 *
 * @returns {ReactElement}
 */
export function renderPrivacyDiv() {
    return <div> <p> { '\u00A0' } </p> <p> { renderPrivacyLink() } </p> <p> { '\u00A0' } </p> </div>;
}


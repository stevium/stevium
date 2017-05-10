/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Page_page.graphql
 * @generated SignedSource<<24f6d4abb6058dcba810035482c8495b>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Page_page = {
  id: string;
  title?: ?string;
  createdAt?: ?any;
  updatedAt?: ?any;
  url: string;
  body?: ?Page_page_body;
};

export type Page_page_body = {
  html?: ?string;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "baseHeadingLevel",
      "type": "Int"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Page_page",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "title",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "createdAt",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "url",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Markup",
      "name": "body",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "baseHeadingLevel",
              "variableName": "baseHeadingLevel",
              "type": "Int"
            }
          ],
          "name": "html",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Tags_tagged",
      "args": null
    }
  ],
  "type": "Page"
};

module.exports = fragment;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

// React 默认使用客户端版本的 ReactDOM
// 提供了服务端渲染 API 的版本在 server.js 中被导出(export)
const ReactDOM = require('./src/client/ReactDOM');

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
module.exports = ReactDOM.default || ReactDOM;

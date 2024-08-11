#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MyConstructHubStack } from '../lib/my-construct-hub-stack';
import { ConstructHub } from 'construct-hub';

const app = new cdk.App();

const stack = new MyConstructHubStack(app, 'MyConstructHub', { /* ... */ });

new ConstructHub(stack, 'ConstructHub');

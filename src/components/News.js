import React from 'react';
import { render } from 'react-dom';
import NewsItem from './NewsItem';
import { Component } from 'react';

export default class News extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>

          <div class="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>

          <div class="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>

          <div class="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>

          <div class="col-md-4">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
      </div>
    );
  }
}

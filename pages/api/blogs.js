import fetch from 'isomorphic-unfetch';
import firebase from 'firebase';
import db from '../../lib/firebase';
import React, { useState, useEffect } from 'react';

export default async function handler(req, res) {
  var arr = [];
  await db.collection('blogs').onSnapshot((snap) => {
    res.send(snap.docs.map(data => ({title: data.data().title, image: data.data().image, slug: data.data().slug, views: data.data().views, likes: data.data().likes, date: data.data().date})));
  });
}

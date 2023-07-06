import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Spinner from '../components/Loader/Spinner';
import Cards from '../components/Card/Cards';
import bookmark from '../assets/images/bm.svg';

import { useSelector, useDispatch } from 'react-redux'
import { useGetBookmarksQuery } from '../state/features/user/userService'
import { setData } from '../state/features/user/userSlice';

function Bookmarks() {
  const bookmarks = useSelector(state => state.user.bookmarks);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetBookmarksQuery('bookmarks');

  useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (data) {
      dispatch(setData(data));
    }
  }, [data]);

  return (
    <div className="pantry">
      <Navbar />
      <div className="list">
        <div className="list__header">
          <h1 className="list__header--title">Bookmarks</h1>
        </div>
        <div className="list__items">
          {isLoading ? <Spinner /> : bookmarks.length > 0 ? (
            <Cards recipes={bookmarks} />
          ) : (
            <div className="list__empty">
              <div className="list__empty--icon">
                <img src={bookmark} alt="bookmark" />
              </div>
              <div className="list__empty--message">
                <h2>You have no bookmarks</h2>
                <p>Save recipes to your bookmarks</p>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Bookmarks
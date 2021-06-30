import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
// import { MessageResponseInterface } from '../../interfaces/message'
import { FanartResponseInterface } from '../../interfaces/fanart'
// import { ClipResponseInterface } from '../../interfaces/clip'

const DEFAULT_NUM_DATA_LOAD = 10

type ResponseInterface =
  // | MessageResponseInterface
  FanartResponseInterface
// | ClipResponseInterface

interface propInterface {
  next: (limit: number, lastId: string) => Promise<ResponseInterface[]>
  onData: (data: ResponseInterface[]) => void
  numDataLoad?: number
  children
}

export default function InfiniteScrolling(props: propInterface) {
  const { next, children, onData, numDataLoad = DEFAULT_NUM_DATA_LOAD } = props
  const [data, setData] = useState<ResponseInterface[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [lastId, setLastId] = useState<string>()

  async function getNextData() {
    try {
      const newData = await next(numDataLoad, lastId)
      if (newData.length) {
        const nextData = data.concat(newData)
        setData(nextData)
        setLastId(nextData[nextData.length - 1]._id)
        onData(nextData)
      } else {
        setHasMore(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNextData()
  }, [])

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={getNextData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {children}
    </InfiniteScroll>
  )
}

import { FanartDoc, FanartInterface, FanartModel } from '@model/fanart'
import { StoreFanartParameter } from 'interface/service'

/**
 * Get all fanart
 * @param lastId ID of last fanart document (pagination)
 * @param limit num of fanart in one page (pagination)
 * @param isVerified set to true to fetch verified fanart and vice versa
 * @returns array of fanart document
 */
export const getAllFanart = async (
  lastId: string,
  limit: number,
  isVerified: boolean
): Promise<FanartDoc[]> => {
  // if lastId is not given or given an empty string
  if (lastId === 'NULL' || lastId === '') {
    return FanartModel.find({ isVerified })
      .select('-__v -updatedAt')
      .limit(limit)
      .exec()
  }
  return FanartModel.find({ _id: { $gt: lastId }, isVerified })
    .select('-__v -updatedAt')
    .limit(limit)
    .exec()
}

/**
 * Create new fanart
 * @param creator fanart's creator
 * @param imageUrl fanart's content
 * @returns new fanart document
 */
export const storeFanart = async ({
  creator,
  imageUrl,
}: StoreFanartParameter): Promise<FanartDoc> => {
  const data: FanartInterface = {
    creator,
    imageUrl,
    isVerified: false,
  }

  // Create new fanart
  const fanart = new FanartModel(data)
  await fanart.save()

  return fanart
}

/**
 * Update existing fanart
 * @param _id fanart's id
 * @param creator fanart's creator
 * @param imageUrl fanart's imageUrl
 * @param isVerified fanart's isVerified
 * @returns new fanart document
 */
export const updateFanart = async (
  _id: string,
  creator: string,
  imageUrl: string,
  isVerified: boolean
): Promise<FanartDoc> => {
  const fanart: FanartDoc | null = await FanartModel.findById(_id).exec()
  // if not found
  if (!fanart) throw new TypeError('fanart not found')

  fanart.creator = creator
  fanart.imageUrl = imageUrl
  fanart.isVerified = isVerified
  const updatedFanart = await fanart.save()

  return updatedFanart
}

/**
 * Delete existing fanart
 * @param _id fanart's id
 */
export const deleteFanart = async (_id: string): Promise<void> => {
  const result = await FanartModel.deleteOne({ _id })
  if (result.deletedCount === 0) throw new TypeError('fanart not found')
}

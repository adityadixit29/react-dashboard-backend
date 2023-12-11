import { sector as SectorModel } from "../models/sector.js";

export const getMySector = async (req, res, next) => {
    try {
        const sectors = await SectorModel.aggregate([
            {
              $group: {
                _id: "$sector",
                totalIntensity: { $sum: "$intensity" },
                totalLikelihood: { $sum: "$likelihood" }
              },
            },
            {
                $match: {
                    _id: { $ne: "" } // Exclude empty sectors
                }
            },
            {
                $sort: {
                    totalIntensity: -1 // Sort in decreasing order based on totalIntensity
                }
            }
          ]);
        console.log(sectors);
        res.status(200).json({
            success: true,
            sectors, // Update the key name here
        });
    } catch (error) {
        next(error);
    }
};
export const getMyRelevance = async (req, res, next) => {
    try {
        const sectors = await SectorModel.aggregate([
            {
              $group: {
                _id: "$sector",
                totalrelevance: { $sum: "$relevance" },
              },
            },
            {
                $match: {
                    _id: { $ne: "" } // Exclude empty sectors
                }
            },
          ]);
        console.log(sectors);
        res.status(200).json({
            success: true,
            sectors, // Update the key name here
        });
    } catch (error) {
        next(error);
    }
};
export const getMyTopic  = async (req, res, next) => {
    try {
        const sectors = await SectorModel.aggregate([
            {
                $match: {
                    country: "India", // Filter for India
                    topic: { $ne: "" }, // Exclude empty topics
                },
            },
            {
                $group: {
                    _id: "$topic",
                    count: { $sum: 1 }, // Count the occurrences of each topic
                },
            },
            {
                $sort: {
                    count: -1, // Sort in descending order of frequency
                },
            },
          ]);
        console.log(sectors);
        res.status(200).json({
            success: true,
            sectors, // Update the key name here
        });
    } catch (error) {
        next(error);
    }
};
export const getMyYear  = async (req, res, next) => {
    try {
        const year = req.query.year || '2016'; // Default to 2016 if year is not specified
    const relevanceData = await SectorModel.aggregate([
      {
        $match: {
          start_year: { $ne: "" },
          start_year: year,
        },
      },
      {
        $group: {
          _id: '$sector',
          totalRelevance: { $sum: '$relevance' },
        },
      },
      {
        $project: {
          _id: {
            $cond: [{ $eq: ['$_id', ""] }, null, '$_id']
          },
          totalRelevance: 1,
        },
      },
      {
        $match: {
          _id: { $ne: null } // Exclude documents with empty _id
        },
      }
    ]);

    res.status(200).json({
      success: true,
      year,
      relevanceData,
    });
      } catch (error) {
        next(error);
      }
};
export const alldata  = async (req, res, next) => {
    const all = await SectorModel.find();

    res.status(200).json({
      success:"true",
      all
    })
};

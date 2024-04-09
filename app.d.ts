/// <reference types="nativewind/types" />

interface RestaurantItem {
  info: {
    id: string;
    name: string;
    cloudinaryImageId: string;
    locality: string;
    areaName: string;
    costForTwo: string;
    cuisines: string[];
    avgRating: number;
    parentId: string;
    avgRatingString: string;
    totalRatingsString: string;
    promoted: boolean;
    adTrackingId: string;
    sla: {
      deliveryTime: number;
      lastMileTravel: number;
      serviceability: string;
      slaString: string;
      lastMileTravelString: string;
      iconType: string;
    };
    availability: {
      nextCloseTime: string;
      opened: boolean;
    };
    badges: {
      imageBadges: ImageBadges[];
    };
    isOpen: true;
    aggregatedDiscountInfoV2: {
      header: string;
      shortDescriptionList: DescriptionList[];
      descriptionList: DescriptionList[];
    };
    type: string;
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: BadgeObject[];
        };
        textBased: {};
        textExtendedBadges: {};
      };
    };
    orderabilityCommunication: {
      title: {};
      subTitle: {};
      message: {};
      customIcon: {};
    };
    differentiatedUi: {
      displayType: string;
      differentiatedUiMediaDetails: {
        mediaType: string;
        lottie: {};
        video: {};
      };
    };
    reviewsSummary: {};
    displayType: string;
    restaurantOfferPresentationInfo: {};
  };
  analytics: {
    context: string;
  };
  cta: {
    link: string;
    text: string;
    type: string;
  };
  widgetId: string;
}

interface ImageBadges {
  imageId: string;
  description: stirng;
}

interface DescriptionList {
  meta: string;
  discountType: string;
  operationType: string;
}

interface BadgeObject {
  attributes: {
    description: string;
    imageId: string;
  };
}

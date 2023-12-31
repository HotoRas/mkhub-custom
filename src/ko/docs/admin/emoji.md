# 커스텀 이모지 관리
커스텀 이모지는 어드민과 모더레이터가 인스턴스 설정의 커스텀 이모지 서브메뉴에서 설정할 수 있습니다.
기본적으로 현재 로컬에 설치된 이모지 목록을 보여줍니다.
처음에는 목록이 비어 있지만, 여러 방식으로 이모지 추가가 가능합니다.

## 다른 인스턴스에서 이모지 복사
이모지는 다른 인스턴스로부터 손쉽게 복사할 수 있습니다.  
이모지를 복사하려면, 커스텀 이모지 설정에서 "리모트" 탭으로 전환하세요.
해당 메뉴에서, 이모지를 이름이나 호스트로 검색할 수 있습니다.

원하는 이모지를 찾았다면 그 이모지를 클릭하세요. 이모지를 들여올 수 있는 작은 메뉴가 표시됩니다.

모든 이모지는 저작권이 있을 수 있으며 다른 이모지를 사용할 때 저작권을 확인하는 것은 당신의 의무입니다.

## 개별 이모지 들여오기
만약 커스텀 이모지로 전환하고 싶은 이미지 파일이 있다면 그 이미지를 이모지로 들여올 수 있습니다.
노트에 파일을 첨부하는 것처럼 동작합니다:
새 파일을 업로드하거나, Misskey 드라이브에서 선택하거나, 혹은 다른 URL에서 업로드하는 것도 가능합니다.

::: danger
드라이브에서 이모지를 들여온다고 해서 파일이 별도로 복사되는 것은 아닙니다.
드라이브에서 해당 파일이 삭제되면 이모지도 망가지니 주의해주세요.
:::

## 대량으로 이모지 들여오기
이모지는 특별한 포맷을 따르는 ZIP 파일을 통해 들여올 수도 있습니다.
이 기능은 커스텀 이모지 창에서 맨 오른쪽 위의 점 3개(...) 메뉴에서 찾을 수 있습니다.

::: warning
이모지를 대량으로 들여오는 과정에서 기존 이모지를 덮어쓰거나 인스턴스를 망가트릴 수 있습니다.
확인된 출처, 되도록 직접 작성한 이모지만을 들여오십시오.
:::

### 이모지 묶음 포맷
압축 파일의 최상위 폴더에 `meta.json` 파일이 묶음의 이모지 정보를 가지고 있어야 합니다.
타입 정의는 다음과 같으며, `Meta`는 모든 파일의 구조입니다.

```typescript
class Meta {
	metaVersion: number;
	host: string;
	/**
	 * Date and time representation returned by ECMAScript `Date.prototype.toString`.
	 */
	exportedAt: string;
	emojis: Emoji[];
}

class Emoji {
	downloaded: boolean;
	fileName: string;
	emoji: {
		id: string;
		updatedAt: string;
		name: string;
		host: null;
		category: string;
		originalUrl: string;
		publicUrl: string;
		uri: null;
		type: string;
		aliases: string[];
	};
}
```

`Meta`의 각 필드는 현재 `emojis` 필드 이외에는 이모지 들여오기 과정에서 사용되지 않습니다.

각 `Emoji`에 대하여:

- `downloaded`<!--: boolean? | false-->: 항상 `true`로 설정되어 있어야 합니다. 없거나 `true`에 상응하지 않으면, 이모지를 들여오지 않습니다.
- `fileName`<!--: string-->: 압축 파일 내의 이미지 파일 이름입니다.
- `emoji`<!--: struct-->: 이모지의 정보로 들여올 때 해당 정보가 데이터베이스에 기록됩니다. 대부분의 필드가 현재 있는지 여부도 확인하지 않습니다만, 다음은 사용되고 있습니다:
  - `name`<!--: string-->: 사용자에게 표시되는 주요 이름. `blobfox`로 설정했다면 `:blobfox:`로 입력하면 해당 이모지를 이용할 수 있습니다.  
		기존에 존재하는 이모지 이름을 적게 되면 **덮어씌워집니다**!
	- `category`<!--: string? | null-->: 이모지의 카테고리
	- `aliases`<!--: string[]? | null-->: 이모지의 별칭으로 추가될 목록입니다. 어드민 UI에서는 "태그"라고 부릅니다.

## 이모지 수정 및 삭제
이모지의 각 항목은 로컬 이모지 목록에서 선택하여 수정할 수 있습니다.  
커스텀 이모지를 선택하면, 항목을 수정할 수 있는 창이 표시됩니다.  
이 창에서는 이모지 삭제 또한 제공합니다.

::: danger
커스텀 이모지를 삭제하더라도, 해당 이모지를 이용해 작성한 노트는 자동으로 수정되지 않습니다.  
이에 따라, 해당 이모지는 더이상 정상적으로 표시되지 않게 됩니다.
:::

리모트 이모지는 수정 및 삭제가 되지 않는다는 점을 명심하세요.

각 이모지는 이름과 카테고리, 그리고 여러 태그를 가질 수 있습니다.  
카테고리는 이모지 선택기에서 이모지를 구획화하기 위해 사용합니다.  
태그는 이모지 선택기에서 이모지를 검색할 때 이름 대신 사용할 수 있는 별칭입니다.

수정을 마쳤다면, 창의 오른쪽 위에 있는 체크 마크를 선택해 저장하세요.

### 일괄 수정
이모지는 검색 필드 아래의 체크박스를 선택함으로서 일괄 수정도 가능합니다.
활성화되면 이모지를 클릭하는 행동이 수정 창을 여는 대신 이모지를 선택하게 됩니다.

수정 옵션은 체크박스 아래에 버튼으로 표시됩니다.
여기에서 일반 상태로 돌아가려면 체크박스를 선택 해제하면 됩니다.

/**
 * Author: Keval Gandevia
 */

package com.tiffinbox.backend.dto.response.admin;

import com.tiffinbox.backend.dto.UserFoodServiceProviderDTO;
import com.tiffinbox.backend.dto.response.BasicResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
public class GetAllPendingRequestsResponse extends BasicResponse {
    List<UserFoodServiceProviderDTO> pendingRequestList;
}
